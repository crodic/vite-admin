export default {
  config: {
    version: 'version: {{version}}',
    language: {
      vietnamese: 'Vietnamese',
      english: 'English',
    },
  },

  navigation: {
    groupGeneral: {
      system: {
        title: 'System',
        dashboard: 'Dashboard',
        auditLogs: 'Logs',
        admins: 'Admins',
        users: 'Users',
        roles: 'Roles',
        settings: 'Settings',
      },
    },
    groupUtility: {
      system: {
        title: 'Utility',
        pages: 'Pages',
      },
    },
    user: {
      account: 'Account',
      logout: 'Logout',
      notifications: 'Notifications',
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
        },
        button: {
          update: 'Update Profile',
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

    ////

    activityLogOverview: {
      title: 'Activity Logs',
      description: 'Manage activity logs.',
      empty: 'No activity logs found.',
      tableColumns: {
        actor: 'Actor',
        action: 'Action',
        entity: 'Entity',
        resourceId: 'Resource ID',
        timestamp: 'Timestamp',
      },
    },

    activityLogDetail: {
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
      },
      buttons: {
        back: 'Back',
      },
    },

    adminOverview: {
      title: 'Admins',
      description: 'View admins.',
      empty: 'No admins found.',
      tableColumns: {
        fullName: 'Full Name',
        email: 'Email',
        role: 'Role',
        createdAt: 'Created At',
        actions: 'Actions',
      },
      buttons: {
        create: 'Create',
      },
      input: {
        emailPlaceholder: 'Search by email...',
      },
      popupDelete: {
        title: 'Are you sure delete this?',
        description: "You won't be able to revert this!",
        confirm: 'Yes, delete it!',
        cancel: 'Cancel',
      },
    },

    adminDetail: {
      title: 'Admin Detail',
      description: 'View admin detail.',
      cardTitle: 'Admin Information',
      fields: {
        id: 'ID',
        username: 'Username',
        firstName: 'First Name',
        lastName: 'Last Name',
        fullName: 'Full Name',
        email: 'Email',
        role: 'Role',
        avatar: 'Avatar',
        lastLoginAt: 'Last Login At',
        emailVerified: 'Email Verified',
        birthday: 'Birthday',
        active: 'Active',
        inactive: 'Inactive',
        phoneNumber: 'Phone Number',
        ipAddress: 'IP Address',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
      },
      buttons: {
        edit: 'Edit',
        delete: 'Delete',
        back: 'Back',
      },
    },

    adminCreate: {
      title: 'Create Admin',
      description: 'Create a new admin.',
      fields: {
        email: 'Email',
        firstName: 'First Name',
        lastName: 'Last Name',
        role: 'Role',
        rolePlaceholder: 'Select a role',
        phoneNumber: 'Phone Number',
        phoneNumberPlaceholder: 'Enter phone number',
        password: 'Password',
        passwordConfirmation: 'Confirmation Password',
        birthday: 'Birthday',
        username: 'Username',
        bio: 'Bio',
      },
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
      errors: {
        emailRequired: 'Email is required.',
        roleRequired: 'Role is required.',
        passwordRequired: 'Password is required.',
        passwordMin: 'Password must be at least 8 characters.',
        passwordMax: 'Password must be less than 255 characters.',
        passwordUppercase:
          'Password must contain at least one uppercase letter.',
        passwordLowercase:
          'Password must contain at least one lowercase letter.',
        passwordNumber: 'Password must contain at least one number.',
        passwordSpecial:
          'Password must contain at least one special character.',
        passwordConfirmationRequired: 'Password confirmation is required.',
        passwordMismatch: 'Password and confirmation password do not match.',
      },
      success: {
        create: 'Admin created successfully.',
      },
    },

    adminEdit: {
      title: 'Edit Admin',
      description: 'Edit admin.',
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        role: 'Role',
        rolePlaceholder: 'Select a role',
        phoneNumber: 'Phone Number',
        phoneNumberPlaceholder: 'Enter phone number',
        birthday: 'Birthday',
        username: 'Username',
        bio: 'Bio',
      },
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
    },

    roleOverview: {
      title: 'Roles',
      description: 'View roles.',
      empty: 'No roles found.',
      tableColumns: {
        name: 'Name',
        permissions: 'Permissions',
        actions: 'Actions',
      },
      buttons: {
        create: 'Create',
      },
      input: {
        namePlaceholder: 'Search by name...',
      },
      popupDelete: {
        title: 'Are you sure delete this?',
        description: "You won't be able to revert this!",
        confirm: 'Yes, delete it!',
        cancel: 'Cancel',
      },
    },

    roleCreate: {
      title: 'Create Role',
      description: 'Create a new role.',
      fields: {
        name: 'Name',
        permissions: 'Permissions',
      },
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
      success: {
        create: 'Role created successfully.',
      },
    },

    roleEdit: {
      title: 'Edit Role',
      description: 'Edit role.',
      fields: {
        name: 'Name',
        permissions: 'Permissions',
      },
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
      success: {
        update: 'Role updated successfully.',
      },
    },

    roleDetail: {
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
      popupDelete: {
        title: 'Are you sure delete this?',
        description: "You won't be able to revert this!",
        confirm: 'Yes, delete it!',
        cancel: 'Cancel',
      },
      success: {
        update: 'Role updated successfully.',
        delete: 'Role deleted successfully.',
      },
      buttons: {
        back: 'Back',
        edit: 'Edit',
        delete: 'Delete',
      },
    },

    userOverview: {
      title: 'Users',
      buttons: {
        create: 'Create',
      },
    },

    userDetail: {
      title: 'User Detail',
      description: 'View user detail.',
      cardTitle: 'User Information',
      fields: {
        id: 'ID',
        firstName: 'First Name',
        lastName: 'Last Name',
        fullName: 'Full Name',
        email: 'Email',
        avatar: 'Avatar',
        lastLoginAt: 'Last Login At',
        emailVerified: 'Email Verified',
        active: 'Active',
        inactive: 'Inactive',
        phoneNumber: 'Phone Number',
        ipAddress: 'IP Address',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
      },
      buttons: {
        edit: 'Edit',
        delete: 'Delete',
        back: 'Back',
      },
    },

    userCreate: {
      title: 'Create User',
      description: 'Create a new user.',
      fields: {
        email: 'Email',
        firstName: 'First Name',
        lastName: 'Last Name',
        role: 'Role',
        rolePlaceholder: 'Select a role',
        phoneNumber: 'Phone Number',
        phoneNumberPlaceholder: 'Enter phone number',
        password: 'Password',
        passwordConfirmation: 'Confirmation Password',
      },
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
      errors: {
        emailRequired: 'Email is required.',
        roleRequired: 'Role is required.',
        passwordRequired: 'Password is required.',
        passwordMin: 'Password must be at least 8 characters.',
        passwordMax: 'Password must be less than 255 characters.',
        passwordUppercase:
          'Password must contain at least one uppercase letter.',
        passwordLowercase:
          'Password must contain at least one lowercase letter.',
        passwordNumber: 'Password must contain at least one number.',
        passwordSpecial:
          'Password must contain at least one special character.',
        passwordConfirmationRequired: 'Password confirmation is required.',
        passwordMismatch: 'Password and confirmation password do not match.',
      },
      success: {
        create: 'User created successfully.',
      },
    },

    userEdit: {
      title: 'Edit User',
      description: 'Edit user.',
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        phoneNumber: 'Phone Number',
        phoneNumberPlaceholder: 'Enter phone number',
      },
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
    },

    profileAccount: {
      title: 'Account',
      description: 'Manage your account.',
      sections: {
        profile: 'Profile',
        password: 'Password',
      },
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        phoneNumber: 'Phone Number',
        phoneNumberPlaceholder: 'Enter phone number',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        passwordConfirmation: 'Confirmation Password',
      },
      buttons: {
        saveProfile: 'Save',
        savePassword: 'Save',
      },
      success: {
        edit: 'Account updated successfully.',
        password: 'Password updated successfully.',
      },
      errors: {
        currentPasswordRequired: 'Current password is required.',
        newPasswordRequired: 'New password is required.',
        passwordConfirmationRequired: 'Password confirmation is required.',
        passwordMismatch:
          'New password and confirmation password do not match.',
        passwordNotMatch: 'Current password is not match.',
        passwordMin: 'Password must be at least {{min}} characters.',
        passwordMax: 'Password must be less than {{max}} characters.',
        passwordUppercase:
          'Password must contain at least one uppercase letter.',
        passwordLowercase:
          'Password must contain at least one lowercase letter.',
        passwordNumber: 'Password must contain at least one number.',
        passwordSpecial:
          'Password must contain at least one special character.',
        uploadAvatar: 'Please upload a avatar image.',
      },
    },

    login: {
      title: 'Welcome Back',
      description: 'Login to your Honkai Portal account.',
      fields: {
        email: 'Email',
        password: 'Password',
      },
      buttons: {
        login: 'Login',
        forgotPassword: 'Forgot Password?',
      },
      messages: {
        loginSuccess: 'Login successfully.',
        noAccount: "Don't have an account? {{link}}",
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
      buttons: {
        send: 'Send',
        back: 'Back',
      },
      messages: {
        forgotSuccess: 'Email sent successfully.',
        noAccount: "Don't have an account? {{link}}",
        descriptionEmail:
          'Enter your email address and we will send you a link to reset your password.',
      },
    },

    resetPassword: {
      title: 'Reset Password',
      description: 'Reset your password.',
      fields: {
        password: 'Password',
        passwordPlaceholder: 'Enter new password',
        passwordConfirmation: 'Password Confirmation',
        passwordConfirmationPlaceholder: 'Enter password confirmation',
      },
      buttons: {
        reset: 'Reset',
        back: 'Back',
      },
      success: {
        reset: 'Password reset successfully.',
      },
    },

    // settings: {
    //   title: 'Settings',
    // },

    pagesOverview: {
      title: 'Pages',
      tableColumns: {
        slug: 'Slug',
        status: 'Status',
        createdAt: 'Created At',
        actions: 'Actions',
        title: 'Title',
        screen: 'Screen',
        position: 'Position',
      },
      popupDelete: {
        title: 'Are you sure delete this?',
        description: "You won't be able to revert this!",
        confirm: 'Yes, delete it!',
        cancel: 'Cancel',
      },
      buttons: {
        create: 'Create',
        dragMode: 'Drag Mode',
        back: 'Back',
      },
    },

    pagesCreate: {
      title: 'Create Page',
      buttons: {
        save: 'Save',
        cancel: 'Cancel',
      },
      fields: {
        status: 'Status',
        screen: 'Screen',
        position: 'Position',
        order: 'Order',
        slug: 'Slug',
      },
    },

    pagesDetail: {
      cardTitle: 'Page Detail',
      fields: {
        status: 'Status',
        screen: 'Screen',
        position: 'Position',
        slug: 'Slug',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        order: 'Page Order',
      },
      title: 'Page Detail',
      buttons: {
        back: 'Back',
        edit: 'Edit',
        delete: 'Delete',
      },
    },

    pagesEdit: {
      title: 'Edit Page',
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
  },

  forms: {
    notAvailable: 'Not available',
  },
}
