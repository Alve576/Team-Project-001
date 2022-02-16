import React from 'react';

const Emni = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route path="/dashboard" element={
                        <Dashboard />
                    }>
                        <Route exact path="/dashboard/dashboardhome" element={
                            <DashboardHome>

                            </DashboardHome>}>
                        </Route>

                        <Route path={`/dashboard/makeAdmin`} element={
                            <h1>sdhajdhgasjdgjahsgdjh00</h1>
                        }>
                        </Route>
                        <Route path={`/dashboard/inventory`} element={
                            <h1>sdhajdhgasjdgjahsgdjh111</h1>
                        }>
                        </Route>
                        <Route path={`/dashboard/addproduct`} element={
                            <h1>sdhajdhgasjdgjahsgdjh2222</h1>
                        }>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Emni;
