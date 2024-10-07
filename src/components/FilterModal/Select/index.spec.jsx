import { renderWithProviders } from "../../../utils/helpers";
import Select from "./index";
import { screen } from "@testing-library/react";

describe("<Select />", () => {
  const options = [
    { value: "fire", label: "Fire" },
    { value: "water", label: "Water" },
    { value: "grass", label: "Grass" },
  ];

  it("should render the Select component", () => {
    renderWithProviders(
      <Select name="type" value="" onChange={() => {}} options={options} />
    );

    // Testar se o Select aparece
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should have the options", () => {
    renderWithProviders(
      <Select name="type" value="" onChange={() => {}} options={options} />
    );

    // Testar se as opções estão presentes
    options.forEach((option) => {
      //executa uma determinada função para cada elemento do array
      //usado para iterar sobre todas as opções fornecidas ao componente Select
      expect(
        screen.getByRole("option", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it("should have the correct option selected", () => {
    const handleChange = jest.fn(); //cria uma função mock (simulada)
    renderWithProviders(
      <Select
        name="type"
        value="fire"
        onChange={handleChange}
        options={options}
      />
    );
    //simulando o funcionamento do componente Select

    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("fire");
  });
});
