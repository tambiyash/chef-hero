import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPaginatedOrders } from "../slices/orderSlice";
import { Button, Pagination } from "../components";
import DataTable from "./DataTable";

const LIMITS_ARR = [5, 10, 12, 15];

const DashboardPagination = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state?.orders?.paginatedOrders?.data);
  const total = useSelector((state) => state?.orders?.paginatedOrders?.total);
  const [dashboardState, setDashboardState] = useState({
    currentPage: 1,
    limit: 10,
  });

  useEffect(() => {
    const {currentPage, limit} = dashboardState;
    dispatch(fetchPaginatedOrders({page: currentPage, limit}));
  }, [dispatch, dashboardState]);

  const handleClickPrev = () => {
    setDashboardState((prev) => ({
      ...prev,
      currentPage: prev.currentPage - 1
    }));
  }

  const handleClickNext = () => {
    setDashboardState((prev) => ({
      ...prev,
      currentPage: prev.currentPage + 1
    }));
  }

  const handleLimitChange = (limit) => {
    setDashboardState(({
      limit: limit,
      currentPage: 1,
    }));
  }

  const navigation = () => history.push("/");

  return (
    <div className="dashboard">
      <div className="form-control">
        <div className="route-button-wrapper">
          <Button rounded purple onClick={navigation}>Return to Filters view</Button>
        </div>
      </div>
      <DataTable
        items={orders}
      />
      <Pagination
        page={dashboardState.currentPage}
        limits={LIMITS_ARR}
        selectedLimit={dashboardState.limit}
        total={total}
        onPrev={handleClickPrev}
        onNext={handleClickNext}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
}

export default DashboardPagination;