function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// Example usage:
const array = [5, 2, 10, 8, 3];
const secondLargest = findSecondLargest(array);

// smallest sub array with sum k
function smallestSubarraySumK(arr, k) {
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; ++i) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == k) {
        result = Math.min(result, j - i + 1);
      }
    }
  }

  // Return result
  return result;
}

// Array of object modification using some logic and extracting required fields
const mockProjects = [
  {
    project_id: 3,
    created_at: "2024-04-25T09:14:47.079313+00:00",
    user_id: 115,
    organisation_id: 122,
    project_metric_id: {
      metric_id: {
        unit: "Sq.m",
        metric_id: 1,
        created_at: "2024-04-25T07:25:28.973013+00:00",
        metric_code: "GFA_001",
        metric_type: "Metric",
        metric_description: "Gross Floor Area (GFA)",
      },
      created_at: "2024-04-25T09:24:51.332418+00:00",
      project_id: 3,
      project_value: 12,
      project_currency: "dollor",
      project_quantity: 2,
      project_metric_id: 1,
    },
    address_lane_1: "mohali",
    address_lane_2: "chandigarh",
    project_name: "icm",
    client_name: "rohit",
    project_type: "construction",
    cost_plan_phase: "12",
    date_of_cost_plan: null,
    construction_cost: 12232,
    project_cost: 234554555,
    is_archived: null,
    allowed_users: null,
  },
  {
    project_id: 13,
    created_at: "2024-05-03T06:00:27.829322+00:00",
    user_id: 115,
    organisation_id: 122,
    project_metric_id: {
      metric_id: {
        unit: "Sq.m",
        metric_id: 2,
        created_at: "2024-04-25T07:52:08.011343+00:00",
        metric_code: "UFA_001",
        metric_type: "Metric",
        metric_description: "Usable Floor Area (UFA)",
      },
      created_at: "2024-04-25T10:07:30.538676+00:00",
      project_id: 2,
      project_value: 54,
      project_currency: "AUD",
      project_quantity: 1,
      project_metric_id: 2,
    },
    address_lane_1: "chandigarh",
    address_lane_2: "chandigarh",
    project_name: "DigiSoul",
    client_name: "RN",
    project_type: "IT",
    cost_plan_phase: "343",
    date_of_cost_plan: "2024-05-03",
    construction_cost: 433,
    project_cost: 3456,
    is_archived: true,
    allowed_users: ["manavsharma.eminence@gmail.com"],
  },
  {
    project_id: 14,
    created_at: "2024-05-03T06:19:09.757382+00:00",
    user_id: 115,
    organisation_id: 122,
    project_metric_id: {
      metric_id: {
        unit: "Sq.m",
        metric_id: 4,
        created_at: "2024-04-26T05:13:21.911179+00:00",
        metric_code: "UCA_001",
        metric_type: "Metric",
        metric_description: "Unenclosed Covered Area (UCA)",
      },
      created_at: "2024-05-03T06:19:09.836495+00:00",
      project_id: 14,
      project_value: 100000,
      project_currency: "usd",
      project_quantity: 10,
      project_metric_id: 15,
    },
    address_lane_1: "123 Main Street",
    address_lane_2: "Suite 100",
    project_name: "example project",
    client_name: "example client",
    project_type: "type A",
    cost_plan_phase: "phase 1",
    date_of_cost_plan: "2024-04-25",
    construction_cost: 50000,
    project_cost: 75000,
    is_archived: false,
    allowed_users: [
      "manavsharma.eminence@gmail.com",
      "kartik.eminence@gmail.com",
    ],
  },
];

const columns = [
  { name: "Project Name", uid: "project_name" },
  { name: "Total Cost", uid: "project_cost" },
  { name: "Cost Plan Year", uid: "date_of_cost_plan" },
  { name: "Adjust Cost", uid: "adjust_cost" },
];

const structuredProjects = mockProjects.map(
  ({ project_metric_id, ...rest }) => {
    const structuredKeys = {
      unit: project_metric_id.metric_id.unit,
      metric_code: project_metric_id.metric_id.unit,
      project_value: project_metric_id.project_value,
      project_currency: project_metric_id.project_currency,
      project_quantity: project_metric_id.project_quantity,
      metric_display_name: `${project_metric_id.metric_id.unit} ${project_metric_id.metric_id.metric_code}`,
      metric_display_value: `${project_metric_id.metric_id.unit} ${project_metric_id.project_value}`,
    };

    columns.push({
      name: `${structuredKeys.unit} ${structuredKeys.metric_code}`,
      uid: "metric_display_name",
    });
    return { ...rest, ...structuredKeys };
  }
);

structuredProjects.forEach(info => {
  const isExists = columns.find((val) => val.name === info.metric_display_name)

  if(!isExists){
    columns.push({ name: info.metric_display_name, uid: "metric_display_value" },)
  }
})

console.debug({ structuredProjects, columns });
