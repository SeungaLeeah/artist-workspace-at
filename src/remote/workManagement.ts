// search.ts: 실제 API 요청을 담당하는 함수
export const getSearchResults = async (searchQuery: string, type: string) => {
    const response = await fetch(``);

    if (!response.ok) {
        throw new Error('검색에 실패했습니다.');
    }

    const data = await response.json();
    return data.results; // 실제 API 응답 구조에 맞게 수정
};
