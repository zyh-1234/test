import { localRequest } from '..'

const SearchAPI = {
  SearchResult: '/search/result',
  SearchSuggest: '/search/suggest',
  SearchHotPro: '/search/hotpro',
}

// 搜索结果
export function getSearchResult(kw = '', start = 0) {
  return localRequest.get({
    url: SearchAPI.SearchResult,
    params: {
      kw,
      start,
    },
  })
}

// 搜索建议
export function getSearchSuggest(kw = '') {
  return localRequest.get({
    url: SearchAPI.SearchSuggest,
    params: {
      kw,
    },
  })
}

// 热门
export function getHotPro() {
  return localRequest.get({
    url: SearchAPI.SearchHotPro,
  })
}
