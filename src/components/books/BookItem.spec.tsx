import { getByAltText, render } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
  id: 1,
  title: "title",
  img: 5,
  category_id: 1,
  summary: "summary",
  author: "author",
  price: 10000,
  likes: 10,
  pub_date: "2021-01-01",
  contents: "contents",
  pages: 100,
  isbn: "isbn",
  form: "form",
  detail: "details",
};

describe("BookItem", () => {
  it("렌더를 확인", () => {
    const { getByText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText("10,000원")).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    // expect(getByAltText(dummyBook.title)).toHaveAttribute(
    //   "src",
    //   `https://picsum.photos/id/${dummyBook.img}/600/600`
    // );
  });
});
