/** A page from a PlutoPay list endpoint: { data, totalCount, page, size, lastPage }. */
export interface Page<T> {
  data: T[];
  totalCount: number;
  page: number;
  size: number;
  lastPage: number;
}

/**
 * Auto-iterate a paginated PlutoPay list endpoint, yielding each item across pages.
 *
 *   for await (const txn of autoPaginate((page) =>
 *     pluto.transactions.listTransactions({ page }))) { ... }
 */
export async function* autoPaginate<T>(
  fetchPage: (page: number) => Promise<Page<T>>,
  startPage = 1,
): AsyncGenerator<T> {
  let page = startPage;
  for (;;) {
    const res = await fetchPage(page);
    for (const item of res.data) yield item;
    if (!res.lastPage || page >= res.lastPage) break;
    page++;
  }
}
