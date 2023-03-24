import React, { useEffect } from 'react';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2.';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  // const dispatch = useAppDispatch();
  // const { users, error, isLoading } = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch])
  
  return (
    <div>
      {/* {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{display: "flex"}}>
        <PostContainer/>
        <PostContainer2/> 
      </div>
    </div>
  );
}

export default App;
