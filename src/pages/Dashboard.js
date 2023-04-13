const Dashboard = ({ user }) => {
  return (
    <section className="section" style={{ height: "88vh" }}>
      <h4 style={{ textAlign: "center" }}>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
