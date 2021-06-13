import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, MultiSelect } from "../components";
import { fetchAllOrders } from "../slices/orderSlice";
import DataTable from "./DataTable";
import "./_dashboard.scss";
import { removeDuplicates } from "../utils";

const Dashboard = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state?.orders?.allOrders?.data);
  const [dashboardState, setDashboardState] = useState({
    data: [],
    sortedBy: { vendorName: "ascending" }
  });

  useEffect(() => {
    setDashboardState((prev) => ({
      ...prev,
      data: orders.slice()
    }))
  }, [orders]);

  useEffect(() => {
    dispatch(fetchAllOrders());
    // dispatch(fetchPaginatedOrders({start: dashboardState.currentPage - 1, end: dashboardState.limit}));
  }, [dispatch]);

  useEffect(() => {
    if (dashboardState.sortedBy) {
      const sortKey = Object.keys(dashboardState.sortedBy)[0];
      const direction = dashboardState.sortedBy[sortKey];
      
      setDashboardState((prev) => ({
        ...prev,
        data: prev.data.sort((a, b, index) => {
          console.log(dashboardState.data[index], direction)
          return direction === 'ascending' ? a[sortKey] > b[sortKey] : a[sortKey] < b[sortKey];
        }),
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardState.sortedBy]);

  const getSuppliers = () => { 
    const suppliersAll = orders.map(order => order.vendorName.trim());
    return removeDuplicates(suppliersAll);
  }

  const handleVendorFilter = (values) => {
    if (!values.length) {
      return;
    }
    setDashboardState((prev) => ({
      ...prev,
      data: orders.filter(ord => values.includes(ord.vendorName.trim()))
    }));
  }

  const handleResetFilter = () => {
    setDashboardState((prev) => ({
      ...prev,
      data: orders,
    }));
  }

  const navigation = () => history.push("/paginate");

  return (
    <div className="dashboard">
      <div className="form-control">
        <MultiSelect
          label="Suppliers:"
          defaultOption={"All Suppliers"}
          items={getSuppliers()}
          onSelectChange={handleVendorFilter}
          onReset={handleResetFilter}
        />
        <div className="route-button-wrapper">
          <Button rounded purple onClick={navigation}>Go to Pagination view</Button>
        </div>
      </div>
      <DataTable
        items={dashboardState.data}
        sortedBy={dashboardState.sortedBy}
        stateChanger={setDashboardState}
      />
    </div>
  );
}

export default Dashboard;