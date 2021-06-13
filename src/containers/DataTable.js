import React from "react";
import moment from "moment";
import { Table, HeaderRow, Badge } from "../components";

const DataTable = ({ items, sortedBy, stateChanger }) => {
  // Helper functions
  const showStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <Badge rounded purple value={status} />;
      case "in shopping cart":
        return <Badge rounded green value={status} />;
      default:
        return <Badge rounded dark value={status} />;
    }
  }

  const showPendingVendorBadge = (pendingVendorOnboarding) => (
    pendingVendorOnboarding && <Badge uppercase={false} yellow rounded value={"1st"} />
  )

  const showNotBYOSBadge = (noBYOS) => (
    noBYOS && <Badge dark value={"MARKET"} />
  )

  const showFriendlyDate = (date) => {
    return date && moment(new Date(date)).format("MMM DD, YYYY");
  }

  return (
    <Table
      items={items}
      renderHead={() => (
          <tr className="header-row">
            <HeaderRow
              key={'orderBuyerStatus'}
              label='Status'
              sortedBy={sortedBy}
              sort={{ key: 'orderBuyerStatus', changer: stateChanger }}
            />
            <HeaderRow
              key={'deliveryDay'}
              label='Delivery Day'
              sortedBy={sortedBy}
              sort={{ key: 'deliveryDay', changer: stateChanger }}
            />
            <HeaderRow
              key={'vendorName'}
              label='Supplier'
              sortedBy={sortedBy}
              sort={{ key: 'vendorName', changer: stateChanger }}
            />
            <HeaderRow
              key={'total'}
              label='Total'
              sortedBy={sortedBy}
              sort={{ key: 'total', changer: stateChanger }}
            />
          </tr>
        )}
        renderRow={(row) => (
          <tr key={row.id}>
            <td>
              {showStatusBadge(row.orderBuyerStatus)}
            </td>
            <td>
              {showFriendlyDate(row.deliveryDay)}
            </td>
            <td>
              <span className="cell-padding-right">{row.vendorName}</span>
              {showNotBYOSBadge(!row.isBYOS)}
              {showPendingVendorBadge(row.isPendingVendorOnboarding)}
            </td>
            <td>
              {`$${row.total}`}
            </td>
          </tr>
        )}
    />
  );
}

export default DataTable;