import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { ListProducts } from "../Home/ListProducts";
import { getProducts } from "../../api/products-api";

// === MOCK DE LA API ===
vi.mock("../../api/products-api", () => ({
  getProducts: vi.fn(),
}));

describe("ListProducts component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("debe mostrar mensaje de carga inicialmente", () => {
    getProducts.mockResolvedValue({ data: [] });

    render(<ListProducts />);

    expect(screen.getByText("Cargando los Gifs..")).toBeInTheDocument();
  });

  test("debe renderizar la lista de productos", async () => {
    getProducts.mockResolvedValue({
      data: [
        { id: 1, name: "Laptop", price: 25000, stock: 10 },
        { id: 2, name: "Mouse", price: 300, stock: 50 },
      ],
    });

    render(<ListProducts />);

    await waitFor(() => {
      expect(screen.getByText("Laptop")).toBeInTheDocument();
      expect(screen.getByText("Mouse")).toBeInTheDocument();
    });
  });
});
