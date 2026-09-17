import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const targetUrl = 'http://127.0.0.1:4173/';
const reviewDir = 'D:\\个人博客\\.impeccable\\review';

async function capture({ name, port, profile, width, height, mobile }) {
  const browser = spawn(edge, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    'about:blank',
  ], { stdio: 'ignore' });

  async function getPage() {
    for (let attempt = 0; attempt < 60; attempt += 1) {
      try {
        const pages = await fetch(`http://127.0.0.1:${port}/json`).then((response) => response.json());
        const page = pages.find((entry) => entry.type === 'page');
        if (page) return page;
      } catch {}
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error(`Edge DevTools endpoint ${port} did not become ready`);
  }

  const page = await getPage();
  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  let nextId = 0;
  const pending = new Map();
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data);
    if (!message.id || !pending.has(message.id)) return;
    const waiter = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) waiter.reject(new Error(message.error.message));
    else waiter.resolve(message.result);
  });

  function command(method, params = {}) {
    const id = ++nextId;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  }

  await command('Page.enable');
  await command('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
  });
  await command('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
  });
  await command('Page.navigate', { url: targetUrl });
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const screenshot = await command('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
  });
  await mkdir(reviewDir, { recursive: true });
  await writeFile(`${reviewDir}\\${name}.png`, Buffer.from(screenshot.data, 'base64'));
  await command('Browser.close').catch(() => {});
  socket.close();
  browser.kill();
}

await capture({
  name: 'desktop',
  port: 9341,
  profile: 'D:\\个人博客\\.impeccable\\edge-desktop',
  width: 1536,
  height: 1024,
  mobile: false,
});

await capture({
  name: 'mobile',
  port: 9342,
  profile: 'D:\\个人博客\\.impeccable\\edge-mobile',
  width: 390,
  height: 844,
  mobile: true,
});

await capture({
  name: 'mobile-375',
  port: 9343,
  profile: 'D:\\个人博客\\.impeccable\\edge-mobile-375',
  width: 375,
  height: 812,
  mobile: true,
});

await capture({
  name: 'mobile-landscape',
  port: 9344,
  profile: 'D:\\个人博客\\.impeccable\\edge-mobile-landscape',
  width: 844,
  height: 390,
  mobile: true,
});
