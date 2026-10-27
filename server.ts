import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'src', 'data', 'persistedContent.json');

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '10mb' }));

  // API to get shared content across all machines
  app.get('/api/content', (req, res) => {
    try {
      if (fs.existsSync(DATA_FILE)) {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        return res.json(JSON.parse(raw));
      }
      return res.json({ empty: true });
    } catch (err) {
      console.error('Error reading persisted content:', err);
      return res.status(500).json({ error: 'Failed to read content' });
    }
  });

  // API to save shared content from Admin module
  app.post('/api/content', (req, res) => {
    try {
      const data = req.body;
      if (!data || typeof data !== 'object') {
        return res.status(400).json({ error: 'Invalid data' });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
      console.log('[Server] Successfully saved shared content to persistedContent.json');
      return res.json({ success: true, timestamp: Date.now() });
    } catch (err) {
      console.error('Error saving persisted content:', err);
      return res.status(500).json({ error: 'Failed to save content' });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Fuji Agency Server] Running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
