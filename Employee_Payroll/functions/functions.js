let employees = require("../Employee_Data/data");

const calculateSalary = (basic) => {
  basic = Number(basic); 
  const hra = basic * 0.2;
  const da = basic * 0.1;
  const pf = basic * 0.05;

  return basic + hra + da - pf;
};

exports.getEmployees = (req, res) => {
  res.render("list", { employees });
};

exports.getEditPage = (req, res) => {
  const emp = employees.find((e) => e.id == req.params.id);

  if (!emp) return res.send("Employee not found");

  res.render("edit", { emp });
};


exports.addEmployee = (req, res) => {
  const emp = {
    id: Date.now(),
    name: req.body.name,
    gender: req.body.gender,
    dept: req.body.department,
    basic_sal: Number(req.body.basicSalary),
    date: req.body.joiningDate, 
  };

  employees.push(emp);

  res.redirect("/employees");
};


exports.updateEmployee = (req, res) => {
  const id = req.params.id;

  employees = employees.map((emp) => {
    if (emp.id == id) {
      return {
        ...emp,
        name: req.body.name,
        gender: req.body.gender,
        dept: req.body.department,
        basic_sal: Number(req.body.basicSalary),
        date: req.body.joiningDate,
      };
    }
    return emp;
  });

  res.redirect("/employees");
};



exports.deleteEmployee = (req, res) => {
  const userid=req.params.id;
  const useridx = employees.findIndex((emp) => emp.id == userid);
  if (useridx ==-1) {
    return res.send("User not Found");
  }
  employees.splice(useridx, 1);

  res.redirect("/employees"); 
};


exports.getPayroll = (req, res) => {
  const emp = employees.find((e) => e.id == req.params.id);

  if (!emp) {
    return res.send("Employee not found");
  }

  const netSalary = calculateSalary(emp.basic_sal);

  res.render("payroll", { emp, netSalary }); 
};
