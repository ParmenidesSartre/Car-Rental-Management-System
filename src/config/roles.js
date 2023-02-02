const allRoles = {
  user: [],
  employee: ['createVehicle', 'getVehicles', 'getVehicle', 'updateVehicle', 'deleteVehicle'],
  admin: ['getUsers', 'manageUsers', 'createVehicle', 'getVehicles', 'getVehicle', 'updateVehicle', 'deleteVehicle'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
