import React, { useState, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(searchParams.get('q') || '');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ q: keyword });
  };

  return (
    <div className={styles.searchPage}>
      <h1 className={styles.title}>搜索</h1>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          className={styles.searchInput}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="输入搜索关键词"
        />
        <button type="submit" className={styles.searchButton}>
          搜索
        </button>
      </form>
      {searchParams.get('q') && (
        <p className={styles.result}>搜索结果: {searchParams.get('q')}</p>
      )}
    </div>
  );
};

export default Search;
