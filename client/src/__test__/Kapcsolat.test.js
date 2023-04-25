import { screen, render} from "@testing-library/react";
import { Kapcsolat } from "../pages/Kapcsolat";

test("test1", () => {
    render(<Kapcsolat/>);

    const buttonElement = screen.queryByRole('button', { innerText: "Küldés" });
    expect(buttonElement).toBeInTheDocument();
});

test("test2", () => {
    render(<Kapcsolat/>);

    const buttonElement = screen.queryByLabelText(/Név/i);
    expect(buttonElement).toBeInTheDocument();
});

test("test3", ()=>{
    render(<Kapcsolat/>);

    const h5Element = screen.queryByText(/Elérhetőségeink/i);
    expect(h5Element).toBeInTheDocument();
});

test("test4", ()=>{
    render(<Kapcsolat/>);

    const hElements = screen.queryAllByRole("heading");
    expect(hElements).toHaveLength(3);
});

test("test5", ()=>{
    render(<Kapcsolat/>);

    const h3Element = screen.queryByRole("heading", {level: 3});
    expect(h3Element).toBeInTheDocument();
});



