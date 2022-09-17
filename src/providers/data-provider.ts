import axios, { AxiosResponse } from "axios";
import { Pageable } from "../types/Pageable";

const PAGE = 1;
const MAX_PAGE_SIZE = 500;

export const dataProvider = {
  /**
   * @param pageable page is the beginning, pageSize is the amount of data
   * by default they get 1 and 500 respectively
   */
  async getList<T>(resource: string, pageable?: Pageable, conf?: any): Promise<T[]> {
    let page = PAGE;
    let pageSize = MAX_PAGE_SIZE;

    if (pageable) {
      page = pageable.page;
      pageSize = pageable.pageSize;
    }

    return (
      await axios.get(resource + '?page=' + page + '&page_size=' + pageSize, conf)
        .then(({ data }) => data)
        .catch(e => console.log(e))
    );
  },

  async getOne<T>(resource: string, id: string | number, conf?: any): Promise<T> {
    return (
      await axios.get(resource + '/' + id, conf)
        .then(({ data }) => data)
        .catch(e => console.log(e))
    );
  },

  async deleteOne<T>(resource: string, id: string | number, conf?: any): Promise<T> {
    return (
      await axios.delete(resource + '/' + id, conf)
        .then(({ data }) => data)
        .catch(e => console.log(e))
    );
  },

  /**
   * build a request for a specific endpoint
   * @param action http method
   * @param endpoint the complete endpoint
   * @param conf some config
   */
  async makeRequest<T>(action: Function, endpoint: string, conf?: any): Promise<T[] | T> {
    return (
      await action(endpoint, conf)
        .then((res: AxiosResponse<T>) => res.data)
        .catch((e: any) => console.log(e))
    );
  },

  async saveAll<T>(resource: string, data: any[], conf?: any): Promise<T[]> {
    return (
      await axios.put(resource, data, conf)
        .then(res => res.data)
        .catch(e => console.log(e))
    );
  },
}


type Action = 'save' | 'get';
