// 여행 메모 추가 요청 DTO
export interface RequestAddMemoDto {
  note: string;
  image?: File | null;
}

// 여행 메모 항목 응답 DTO
export interface TripMemoItem {
  id: number;
  locationId: number;
  note: string;
  imageUrl?: string;
  createdAt: string;
}
