import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>
      Cách đây 3 năm, Thiên Ngân đã từng được 2 HCV vô địch thế giới U14 nữ ở
      nội dung cờ nhanh và cờ chớ
    </p>
  );
}

export default Paragraph;
