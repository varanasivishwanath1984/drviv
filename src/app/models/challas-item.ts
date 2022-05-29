
export class ChallanItem {
    challanNum: string;
    registrationNum: string;
    violationType: string;
    violationLocation: string;
    violationDate: string;
    violationTime : string;
    trafficPSLocation: string;
    amount: number;

    constructor(init?: Partial<ChallanItem>) {
        Object.assign(this, init);
      }
  }
