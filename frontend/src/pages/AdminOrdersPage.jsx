import AdminOrders from "../features/admin/components/AdminOrders.jsx"
import NavBar from "../features/navbar/Navbar"

function AdminOrdersPage() {
  return (
    <div>
      <NavBar>
        <AdminOrders></AdminOrders>
      </NavBar>
    </div>
  )
}

export default AdminOrdersPage
