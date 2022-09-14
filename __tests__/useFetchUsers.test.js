import { renderHook, act } from '@testing-library/react-native';
import useFetchUsers from '../hooks/useFetchUsers';

describe('useFetchUsers', () => {
  test("Default value of `owner` is empty string", () => {
    const { result } = renderHook(() => useFetchUsers());

    expect(result.current.owner).toBe("");
  });

  test('The `onChangeOwner` should correctly change `owner`', () => {
    const { result } = renderHook(() => useFetchUsers());

    act(() => { result.current.onChangeOwner("Jhon Doe"); });

    expect(result.current.owner).toBe("Jhon Doe");
  });

  test("Default value of `repo` is empty string", () => {
    const { result } = renderHook(() => useFetchUsers());

    expect(result.current.repo).toBe("");
  });

  test('The `onChangeRepo` should correctly change `repo`', () => {
    const { result } = renderHook(() => useFetchUsers());

    act(() => { result.current.onChangeRepo("awesome project"); });

    expect(result.current.repo).toBe("awesome project");
  });

  test('The `handlePress` triggered with empty fields should fill the `fieldError` message', () => {
    const { result } = renderHook(() => useFetchUsers());

    act(() => { result.current.handlePress(); });

    expect(result.current.fieldError).toBe("This field is required");
  });
});
