zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
for (item of items) {
item.setField("extra", "");
await item.saveTx();
}
//alert("Extra��������")
return "Extra��������";