zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
var rn=0; //�����滻��Ŀ����
var lan="en"; //�滻������
for (item of items) {
var la = item.getField("language");
if (la=="")  //���Ϊ�����滻
 {item.setField("language", lan);
rn+=1;
 await item.saveTx();
}

}
return rn+"����Ŀ���Ա��滻Ϊ"+lan+"��"
