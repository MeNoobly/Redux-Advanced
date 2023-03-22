import { AppDispatch, RootState } from './../store/store';
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;