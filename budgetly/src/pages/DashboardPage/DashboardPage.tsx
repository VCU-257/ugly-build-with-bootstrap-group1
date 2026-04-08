import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Electricity", value: 30, color: "#60a5fa" },
  { name: "Water", value: 20, color: "#34d399" },
  { name: "Groceries", value: 25, color: "#fbbf24" },
  { name: "Rent", value: 25, color: "#f87171" },
];

const categories = ["Electricity", "Groceries", "Rent", "Water"];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-5">
      <div className="mx-auto w-full max-w-md space-y-5">
        <h1 className="text-3xl font-bold">Hello Haroon!</h1>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body gap-5">
            <div className="rounded-3xl border border-base-300 bg-base-200 p-4">
              <div className="flex flex-col items-center gap-4">
                <div className="text-sm text-base-content/70">
                  Budget overview
                </div>
                <div className="h-60 w-full rounded-3xl bg-white p-4 shadow-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={4}
                      >
                        {data.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-3xl bg-base-200 p-4">
                <div className="text-sm text-base-content/70">
                  30% Electrical
                </div>
                <div className="text-sm text-base-content/70">20% Water</div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-block btn-primary">
          Create a new Payment
        </button>

        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category}
              className="card card-side bg-base-100 shadow-sm"
            >
              <div className="card-body flex-row items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-base-200"></div>
                <div className="font-medium">{category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
