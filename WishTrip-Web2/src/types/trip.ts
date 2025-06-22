// 새로운 메모 추가 요청 DTO
export interface RequestAddMemoDto {
  country: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
}

// 새로운 메모 추가 응답 DTO
export interface ResponseAddMemoDto {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    memoId: number;
    imageUrl: string;
    createdAt: string;
  };
}

// 여행 메모 항목
export interface TripMemoItem {
  memoId: number;
  content: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}

// 여행 메모 전체 조회 응답 DTO
export interface ResponseGetMemoListDto {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    memoList: TripMemoItem[];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
