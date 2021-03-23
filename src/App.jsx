import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FeedList, FeedView } from 'src/pages';
import Header from 'src/components/common/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={FeedList} />
        <Route path="/view/:id" component={FeedView} />
      </Switch>
    </>
  );
}

export default App;
