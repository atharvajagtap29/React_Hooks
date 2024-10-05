# React_Hooks

This repository features a collection of React hook examples organized by type: State, Effect, Ref, Reducer, and Context hooks. Each category includes demonstration components showcasing practical uses of these hooks. The project serves as a valuable resource for learning and experimenting with React hooks in a structured and organized manner.

### File Descriptions

- **main.jsx**: The entry point of the application. It uses `createRoot` to render the main `App` component into the HTML element with the ID `root`.

- **App.jsx**: The main application component that imports styles and the `Hooks` component. This serves as the layout for displaying different hook examples.

- **Hooks.jsx**: This component is a container for all hook examples. It categorizes the examples based on the type of hook (State, Effect, Ref, Reducer, and Context) but currently has the examples commented out. Uncomment the desired example to view it in action.

### Hook Categories

1. **State Hooks**:

   - Contains examples using the `useState` hook.
   - Files: `Exg-1.jsx`, `Exg-2.jsx`, `Exg-3.jsx`

2. **Effect Hooks**:

   - Contains examples using the `useEffect` hook.
   - File: `Example-1.jsx`

3. **Ref Hooks**:

   - Contains examples using the `useRef` hook.
   - File: `Exg-1.jsx`

4. **Reducer Hooks**:

   - Contains examples using the `useReducer` hook.
   - Files: `Example-1.jsx`, `Example-2.jsx`

5. **Context Hooks**:
   - Contains examples using the `useContext` hook.
   - Exg-1.jsx: Utilizes Counter.jsx for context and state management.
   - Exg-2.jsx: Implements a shopping cart example. It includes Item.jsx for individual products and Cart.jsx for displaying selected items and calculating the total bill. The context provider manages the cart's state across components.

### How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd React_Hooks

   ```

2. Install the dependencies

   ```bash
   npm install

   ```

3. Run the application from the root directory where package.json exist
   ```bash
   npm run dev
   ```
