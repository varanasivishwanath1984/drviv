import { ChallanItem } from './challas-item';

export class ChallanDetail { 
  items: ChallanItem[] = [];

  constructor(private itemsMap: { [challanNum: string]: ChallanItem }) {
    this.itemsMap = itemsMap || {};
    
    for (let challanNum in itemsMap) {
      let item = itemsMap[challanNum];
      this.items.push(new ChallanItem({ ...item, challanNum: challanNum }));
    }
  }
  
  get totalPrice() {
    let sum = 0;
    for (let challanNum in this.items) 
      sum += this.items[challanNum].amount;
    return sum;
  }
  
}