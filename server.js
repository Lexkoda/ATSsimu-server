const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Разрешаем запросы с любого источника
app.use(cors());
app.use(express.json());

// Данные о пультах
let firePanels = {
  "ESMI FX": { status: "idle", zones: [] },
  "Cooper CF6000": { status: "idle", zones: [] },
  "Bentel J524": { status: "idle", zones: [] },
  "Teletek": { status: "idle", zones: [] },
  "Smart Line": { status: "idle", zones: [] },
  "FlexEs": { status: "idle", zones: [] },
  "Esser IQ8": { status: "idle", zones: [] }
};

// API для получения статуса пультов
app.get('/api/panel-status', (req, res) => {
  res.json(firePanels);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
