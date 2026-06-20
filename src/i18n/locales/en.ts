export default {
  config: {
    version: 'version: {{version}}',
    language: {
      vietnamese: 'Vietnamese',
      english: 'English',
    },
  },

  navigation: {
    general: {
      title: 'General',
      items: {
        dashboard: 'Dashboard',
        activityLogs: 'Activity logs',
        impersonationLogs: 'Impersonation logs',
      },
    },
    management: {
      title: 'Management',
      items: {
        admins: 'Admins',
        users: 'Users',
        roles: 'Roles',
        permissions: 'Permissions',
      },
    },
    other: {
      title: 'Other',
      items: {
        settings: 'Settings',
        profiles: 'Profiles',
        appearance: 'Appearance',
        account: 'Account',
        helpCenter: 'Help Center',
        password: 'Password',
      },
    },
  },

  validation: {
    required: 'This field is required',
    email: 'The {{field}} must be a valid email',
    min: 'The {{field}} must be at least {{min}} characters',
    max: 'The {{field}} must be at most {{max}} characters',
    fileSize: 'The {{field}} must be less than {{max}} MB',
    fileType: 'The {{field}} must be a file of type {{type}}',
  },

  pages: {
    //* Page Dashboard
    dashboard: {
      title: 'Dashboard',
    },

    //* Page Users (Customers)
    users: {
      overview: {
        title: 'Users',
        description: 'Manage users.',
        tableColumns: {
          fullName: 'Full Name',
          email: 'Email',
          createdAt: 'Created At',
          actions: 'Actions',
        },
      },
      show: {
        title: 'User Detail',
        description: 'View user detail.',
        cardTitle: 'User Information',
        fields: {
          id: 'ID',
          firstName: 'First Name',
          lastName: 'Last Name',
          fullName: 'Full Name',
          email: 'Email',
          createdAt: 'Created At',
          updatedAt: 'Updated At',
          lastLoginAt: 'Last Login At',
          lastIpAddress: 'Last IP Address',
          emailVerified: 'Email Verified',
          phoneNumber: 'Phone Number',
          birthday: 'Birthday',
          avatar: 'Avatar',
        },
      },
      create: {
        title: 'Create User',
        description: 'Create a new user.',
        fields: {
          email: 'Email',
          firstName: 'First Name',
          lastName: 'Last Name',
          phoneNumber: 'Phone Number',
          phoneNumberPlaceholder: 'Enter phone number',
          birthday: 'Birthday',
          password: 'Password',
          confirmPassword: 'Confirmation Password',
        },
      },
      edit: {
        title: 'Edit User',
        description: 'Edit user.',
        fields: {
          email: 'Email',
          firstName: 'First Name',
          lastName: 'Last Name',
          phoneNumber: 'Phone Number',
          phoneNumberPlaceholder: 'Enter phone number',
          birthday: 'Birthday',
          isActive: 'Active',
          emailVerified: 'Email Verified',
        },
      },
      additional: {
        popupDeleteUserTitle: 'Delete User',
        popupDeleteUserDescription:
          'Are you sure you want to delete this user?',
        deleteUserSuccess: 'User deleted successfully.',
        createUserSuccess: 'User created successfully.',
        updateUserSuccess: 'User updated successfully.',
      },
    },

    //* Page Admin Users
    adminUsers: {
      overview: {
        title: 'Admin Users',
        description: 'Manage admin users.',
        tableColumns: {
          fullName: 'Full Name',
          email: 'Email',
          createdAt: 'Created At',
          role: 'Role',
          emailVerified: 'Email Verified',
          action: 'Action',
        },
      },
      show: {
        title: 'Admin User Detail',
        description: 'View admin user detail.',
        cardTitle: 'Admin User Information',
        fields: {
          id: 'ID',
          firstName: 'First Name',
          lastName: 'Last Name',
          fullName: 'Full Name',
          email: 'Email',
          role: 'Role',
          createdAt: 'Created At',
          updatedAt: 'Updated At',
          lastLoginAt: 'Last Login At',
          lastIpAddress: 'Last IP Address',
          birthday: 'Birthday',
          avatar: 'Avatar',
          phoneNumber: 'Phone Number',
          emailVerified: 'Email Verified',
        },
      },
      create: {
        title: 'Create Admin User',
        description: 'Create a new admin user.',
        fields: {
          email: 'Email',
          firstName: 'First Name',
          lastName: 'Last Name',
          phoneNumber: 'Phone Number',
          phoneNumberPlaceholder: 'Enter phone number',
          birthday: 'Birthday',
          password: 'Password',
          confirmPassword: 'Confirmation Password',
          role: 'Role',
          bio: 'Bio',
          bioPlaceholder: 'Write your bio',
          birthdayPlaceholder: 'Enter birthday',
        },
      },
      edit: {
        title: 'Edit Admin User',
        description: 'Edit admin user.',
        fields: {
          email: 'Email',
          firstName: 'First Name',
          lastName: 'Last Name',
          phoneNumber: 'Phone Number',
          phoneNumberPlaceholder: 'Enter phone number',
          birthday: 'Birthday',
          isActive: 'Active',
          emailVerified: 'Email Verified',
          role: 'Role',
          bio: 'Bio',
          bioPlaceholder: 'Write your bio',
          birthdayPlaceholder: 'Enter birthday',
        },
      },
      additional: {
        popupDeleteAdminUserTitle: 'Delete Admin User',
        popupDeleteAdminUserDescription:
          'Are you sure you want to delete this Admin User?',
        deleteAdminUserSuccess: 'Admin User deleted successfully.',
        createAdminUserSuccess: 'Admin User created successfully.',
        updateAdminUserSuccess: 'Admin User updated successfully.',
      },
    },

    //* Page Activity Logs
    activityLogs: {
      overview: {
        title: 'Activity Logs',
        description: 'Manage activity logs.',
        tableColumns: {
          actor: 'Actor',
          action: 'Action',
          entity: 'Entity',
          resourceId: 'Resource ID',
          timestamp: 'Timestamp',
        },
      },
      show: {
        title: 'Activity Log Detail',
        description: 'View activity log detail.',
        cardTitle: 'Activity Log Information',
        fields: {
          id: 'ID',
          action: 'Action',
          role: 'Role',
          entity: 'Entity',
          timestamp: 'Timestamp',
          actor: 'Actor',
          before: 'Before',
          after: 'After',
          actorInformation: 'Actor Information',
          old: 'Old',
          new: 'New',
          field: 'Field',
        },
      },
    },

    //* Page Roles
    roles: {
      overview: {
        title: 'Roles',
        description: 'View roles.',
        empty: 'No roles found.',
        tableColumns: {
          name: 'Name',
          permissions: 'Permissions',
          createdAt: 'Created At',
          actions: 'Actions',
        },
      },
      show: {
        title: 'Role Detail',
        description: 'Description',
        cardTitle: 'Role Information',
        fields: {
          id: 'ID',
          name: 'Role Name',
          permissions: 'Permissions',
          createdAt: 'Created At',
          updatedAt: 'Updated At',
        },
      },
      create: {
        title: 'Create Role',
        description: 'Create a new role.',
        fields: {
          name: 'Role Name',
          permissions: 'Permissions',
        },
      },
      edit: {
        title: 'Edit Role',
        description: 'Edit role.',
        fields: {
          name: 'Name',
          permissions: 'Permissions',
        },
      },
      additional: {
        popupDeleteRoleTitle: 'Delete Role',
        popupDeleteRoleDescription:
          'Are you sure you want to delete this role?',
        deleteRoleSuccess: 'Role deleted successfully.',
        createRoleSuccess: 'Role created successfully.',
        updateRoleSuccess: 'Role updated successfully.',
      },
    },

    //* Page Settings
    settings: {
      title: 'Settings',
      description: 'Manage your settings and preferences.',
      account: {
        title: 'Account',
        description: 'Manage your account.',
        fields: {
          firstName: 'First Name',
          lastName: 'Last Name',
          phoneNumber: 'Phone Number',
          phoneNumberPlaceholder: 'Enter phone number',
          birthday: 'Birthday',
        },
        button: {
          update: 'Update Account',
        },
        messages: {
          birthdayDescription:
            'Your date of birth is used to calculate your age.',
        },
      },
      appearance: {
        title: 'Appearance',
        description: 'Customize your appearance.',
        fields: {
          theme: 'Theme',
          themeDescription:
            'Automatically switch between day and night themes.',
          light: 'Light',
          dark: 'Dark',
          font: 'Font',
          fontDescription: 'Select the font you prefer.',
          languages: 'Languages',
          languagesDescription: 'Select the language you prefer.',
        },
        button: {
          update: 'Update Appearance',
        },
      },
      password: {
        title: 'Password',
        description: 'Update your password.',
        fields: {
          currentPassword: 'Current Password',
          newPassword: 'New Password',
          confirmPassword: 'Confirm Password',
        },
        button: {
          update: 'Update Password',
        },
      },
      profile: {
        title: 'Profile',
        description: 'Update your profile.',
        fields: {
          avatar: 'Avatar',
          bio: 'Bio',
          bioPlaceholder: 'Write your bio',
        },
        button: {
          update: 'Update Profile',
        },
        messages: {
          bioDescription:
            'You can <span>@mention</span> other users and organizations to link to them.',
        },
      },
    },

    //* Page Authentication
    auth: {
      signIn: {
        title: 'Welcome Back',
        description: 'Login to your Honkai Portal account.',
        fields: {
          email: 'Email',
          password: 'Password',
        },
        button: {
          login: 'Login',
          forgotPassword: 'Forgot Password?',
        },
        messages: {
          signIn: 'Sign In',
          forgotPassword: 'Forgot Password?',
          loginSuccess: 'Login successfully.',
          noAccount: "Don't have an account? {{link}}",
          terms:
            'By continuing, you agree to the Terms of Service and Privacy Policy.',
        },
      },
      signUp: {
        title: 'Create an Account',
        description: 'Create a new Honkai Portal account.',
        fields: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email',
          password: 'Password',
          confirmPassword: 'Confirm Password',
        },
        button: {
          register: 'Register',
          forgotPassword: 'Forgot Password?',
        },
        messages: {
          registerSuccess: 'Register successfully.',
          terms:
            'By continuing, you agree to the Terms of Service and Privacy Policy.',
        },
      },
      forgotPassword: {
        title: 'Forgot Password',
        description: 'Reset your password.',
        fields: {
          email: 'Email',
        },
        button: {
          send: 'Send',
          back: 'Back',
        },
        messages: {
          resetPasswordSuccess: 'Reset password successfully.',
        },
      },
      resetPassword: {
        title: 'Reset Password',
        description: 'Reset your password.',
        fields: {
          password: 'Password',
          confirmPassword: 'Confirm Password',
        },
        button: {
          resetPassword: 'Reset Password',
          resetting: 'Resetting...',
          reset: 'Reset',
          back: 'Back',
        },
        messages: {
          resetPasswordSuccess: 'Reset password successfully.',
        },
      },
    },

    //* Page Errors
    errors: {},

    //* Page SignOut
    signOut: {
      title: 'Sign Out',
      description:
        'Are you sure you want to sign out? You will need to sign in again to access your account.',
      button: {
        signOut: 'Sign Out',
        cancel: 'Cancel',
      },
    },
  },

  buttons: {
    delete: 'Delete',
    create: 'Create',
    edit: 'Edit',
    back: 'Back',
    save: 'Save',
    cancel: 'Cancel',
    duplicate: 'Duplicate',
    continue: 'Continue',
    remove: 'Remove',
    reset: 'Reset',
  },

  common: {
    notAvailable: 'Not available',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    popup: {
      deleteTitle: 'Are you sure?',
      deleteDescription:
        'This action cannot be undone. This will permanently delete all your data from our servers.',
    },
  },
}
