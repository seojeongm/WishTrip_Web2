import { axiosInstance } from "./axiosInstance";
import {
  RequestAddMemoDto,
  ResponseAddMemoDto,
  ResponseGetMemoListDto,
} from "../types/trip";

// 메모 추가 (POST /trip/memo/{locationId})
export const addTripMemo = (
  locationId: number,
  body: RequestAddMemoDto
): Promise<ResponseAddMemoDto> => {
  return axiosInstance.post(`/trip/memo/${locationId}`, body);
};

// 여행 기록 리스트 조회 (GET /trip/memo/list?page=n)
export const getTripMemoList = (
  page: number
): Promise<ResponseGetMemoListDto> => {
  return axiosInstance.get(`/trip/memo/list`, {
    params: { page },
  });
};
