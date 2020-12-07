import React from 'react'

const MainPageLayout = () => {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>
            Not Found
       </div>
        </Route>
      </Switch>
    </div>
  )
}

export default MainPageLayout
