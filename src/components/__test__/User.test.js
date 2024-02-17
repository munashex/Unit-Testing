import {render, screen} from '@testing-library/react' 
import User from '../User'

describe("testing all users with async", () => {
    it("renders at least one user", async () => {
        render(<User/>);
        const user = await screen.findAllByTestId("users");
        expect(user.length).toBe(10);
    });
});