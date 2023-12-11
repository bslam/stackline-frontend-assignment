import { IConsumerGood } from "../service/api";

export type IConsumerGoodState = {
  consumerGoods: IConsumerGood[]
}

export type IConsumerGoodAction = {
  type: string
  consumerGood: IConsumerGood
}

export type DispatchType = (args: IConsumerGoodAction) => IConsumerGoodAction