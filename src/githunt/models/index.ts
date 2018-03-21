export interface ResultItem {
  id?: number | 0;
  name?: string | '';
  full_name?: string | '';
  // owner: any;
  private?: boolean | true;
  watchers?: number | 0;
  score?: number | 0;
}

export interface SearchResults {
  total_count?: number;
  incomplete_results?: boolean;
  items?: ResultItem[];
}
