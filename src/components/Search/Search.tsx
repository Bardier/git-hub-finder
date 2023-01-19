import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "../Button";
import styles from "./Search.module.scss";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  userName: HTMLInputElement;
};

export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [isDisabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (inputValue.trim().length === 0) {
      setDisabled(true);
    } else if (inputValue.trim().length > 0 && isDisabled) {
      setDisabled(false);
    }
  }, [inputValue]);

  const handlerSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const userName = e.currentTarget.userName.value.trim();
    if (userName) {
      onSubmit(userName);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handlerSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          type="text"
          className={styles.textField}
          id="search"
          name="userName"
          placeholder="Search GitHub username..."
          ref={inputRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button restProps={{ type: "submit", disabled: isDisabled }}>
          Search
        </Button>
      </div>
    </form>
  );
};
