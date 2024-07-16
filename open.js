let blooksUnlocked = 0;

setInterval(() => fetch2.post("/api/market/open-pack", { packId: 1 }).then(() => blooksUnlocked = blooksUnlocked + 1;), 700);
setInterval(() => fetch2.put("/api/blooks/sell-blooks", { blookId: 2, quantity: blooksUnlocked }).then(() => console.info(`Sold ${blooksUnlocked} blooks`)), 50000);
