import React from 'react';

interface SidebarProps {
  users: string[];
  selectedUser: string | null;
  onSelectUser: (user: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  users,
  selectedUser,
  onSelectUser,
}) => {
  return (
    <div className='w-1/4 border-r p-4'>
      <h2 className='font-bold text-lg'>Users</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user}
            className={`p-2 cursor-pointer ${
              selectedUser === user ? 'bg-gray-200' : ''
            }`}
            onClick={() => onSelectUser(user)}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
