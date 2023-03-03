import React from "react";
import { Container } from "./styles";
import chevron from "../../assets/chevron-right.svg";

function Breadcrumbs({ categories }) {
  return (
    <Container>
      {categories?.map((category) => {
        return (
          <>
            <p>{category}</p>
            {categories?.length !== categories?.indexOf(category) + 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            )}
          </>
        );
      })}
    </Container>
  );
}

export default Breadcrumbs;
