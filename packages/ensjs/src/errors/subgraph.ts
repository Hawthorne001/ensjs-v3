import { BaseError } from './base'

export class InvalidFilterKeyError extends BaseError {
  filterKey: string

  supportedFilterKeys: string[]

  override name = 'InvalidFilterKeyError'

  constructor({
    filterKey,
    supportedFilterKeys,
  }: {
    filterKey: string
    supportedFilterKeys: string[]
  }) {
    super(`Invalid filter key: ${filterKey}`, {
      metaMessages: [
        `- Supported filter keys: ${supportedFilterKeys.join(', ')}`,
      ],
    })
    this.filterKey = filterKey
    this.supportedFilterKeys = supportedFilterKeys
  }
}

export class FilterKeyRequiredError extends BaseError {
  supportedFilterKeys: string[]

  override name = 'FilterKeyRequiredError'

  constructor({
    supportedFilterKeys,
    details,
  }: {
    supportedFilterKeys: string[]
    details?: string
  }) {
    super('At least one filter key is required', {
      metaMessages: [
        `- Supported filter keys: ${supportedFilterKeys.join(', ')}`,
      ],
      details,
    })
    this.supportedFilterKeys = supportedFilterKeys
  }
}

export class InvalidOrderByError extends BaseError {
  orderBy: string

  supportedOrderBys: string[]

  override name = 'InvalidOrderByError'

  constructor({
    orderBy,
    supportedOrderBys,
  }: {
    orderBy: string
    supportedOrderBys: string[]
  }) {
    super(`Invalid orderBy: ${orderBy}`, {
      metaMessages: [
        `- Supported orderBy keys: ${supportedOrderBys.join(', ')}`,
      ],
    })
    this.orderBy = orderBy
    this.supportedOrderBys = supportedOrderBys
  }
}
