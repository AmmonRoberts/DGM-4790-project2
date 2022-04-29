import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Legality {
  readonly format?: string;
  readonly legality?: string;
  constructor(init: ModelInit<Legality>);
}

type TradingCardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TradingCard {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly supertypes?: (string | null)[];
  readonly types?: (string | null)[];
  readonly subtypes?: (string | null)[];
  readonly set?: string;
  readonly setName?: string;
  readonly text?: string;
  readonly flavor?: string;
  readonly gameFormat?: string;
  readonly legality?: (string | null)[];
  readonly multiverseid?: string;
  readonly printings?: (string | null)[];
  readonly source?: string;
  readonly originalType?: string;
  readonly originalText?: string;
  readonly imageUrl?: string;
  readonly watermark?: string;
  readonly cardId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TradingCard, TradingCardMetaData>);
  static copyOf(source: TradingCard, mutator: (draft: MutableModel<TradingCard, TradingCardMetaData>) => MutableModel<TradingCard, TradingCardMetaData> | void): TradingCard;
}