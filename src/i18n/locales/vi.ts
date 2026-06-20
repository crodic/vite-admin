export default {
  config: {
    version: 'phiên bản: {{version}}',
    language: {
      vietnamese: 'Tiếng Việt',
      english: 'English',
    },
  },

  navigation: {
    general: {
      title: 'Chung',
      items: {
        dashboard: 'Bảng điều khiển',
        activityLogs: 'Nhật ký hoạt động',
        impersonationLogs: 'Nhật ký impersonation',
        emailLogs: 'Nhật ký email',
        website: 'Website',
      },
    },
    management: {
      title: 'Quản lý',
      items: {
        admins: 'Quản trị viên',
        users: 'Người dùng',
        roles: 'Vai trò',
        permissions: 'Quyền hạn',
      },
    },
    orders: {
      title: 'Đơn hàng',
      items: {
        myEmails: 'Email của tôi',
      },
    },
    other: {
      title: 'Khác',
      items: {
        settings: 'Cài đặt',
        profiles: 'Thông tin cá nhân',
        appearance: 'Giao diện',
        account: 'Tài khoản',
        helpCenter: 'Trung tâm trợ giúp',
        password: 'Đổi mật khẩu',
        website: 'Website',
      },
    },
  },

  validation: {
    required: 'Trường này là bắt buộc',
    email: '{{field}} phải là email hợp lệ',
    min: '{{field}} phải ít nhất {{min}} ký tự',
    max: '{{field}} không được vượt quá {{max}} ký tự',
    fileSize: '{{field}} phải nhỏ hơn {{max}} MB',
    fileType: '{{field}} phải là file loại {{type}}',
  },

  pages: {
    dashboard: {
      title: 'Bảng điều khiển',
    },

    //* Page Users (Customers)
    users: {
      overview: {
        title: 'Người dùng',
        description: 'Quản lý người dùng.',
        tableColumns: {
          fullName: 'Họ và tên',
          email: 'Email',
          createdAt: 'Ngày tạo',
          actions: 'Hành động',
        },
      },
      show: {
        title: 'Chi tiết người dùng',
        description: 'Xem chi tiết người dùng.',
        cardTitle: 'Thông tin người dùng',
        fields: {
          id: 'ID',
          firstName: 'Tên',
          lastName: 'Họ',
          fullName: 'Họ và tên',
          email: 'Email',
          createdAt: 'Ngày tạo',
          updatedAt: 'Ngày cập nhật',
          lastLoginAt: 'Đăng nhập gần nhất',
          lastIpAddress: 'Địa chỉ IP gần nhất',
          emailVerified: 'Email được xác minh',
          phoneNumber: 'Số điện thoại',
          birthday: 'Ngày sinh',
          avatar: 'Ảnh đại diện',
        },
      },
      create: {
        title: 'Tạo người dùng',
        description: 'Tạo người dùng mới.',
        fields: {
          email: 'Email',
          firstName: 'Tên',
          lastName: 'Họ',
          phoneNumber: 'Số điện thoại',
          phoneNumberPlaceholder: 'Nhập số điện thoại',
          birthday: 'Ngày sinh',
          password: 'Mật khẩu',
          confirmPassword: 'Xác nhận mật khẩu',
        },
      },
      edit: {
        title: 'Chỉnh sửa người dùng',
        description: 'Chỉnh sửa thông tin người dùng.',
        fields: {
          email: 'Email',
          firstName: 'Tên',
          lastName: 'Họ',
          phoneNumber: 'Số điện thoại',
          phoneNumberPlaceholder: 'Nhập số điện thoại',
          birthday: 'Ngày sinh',
          isActive: 'Kích hoạt',
          emailVerified: 'Email đã xác minh',
        },
      },
      additional: {
        popupDeleteUserTitle: 'Xóa người dùng',
        popupDeleteUserDescription: 'Bạn có chắc chắn muốn xóa người dùng này?',
        deleteUserSuccess: 'Xóa người dùng thành công.',
        createUserSuccess: 'Tạo người dùng thành công.',
        updateUserSuccess: 'Cập nhật người dùng thành công.',
      },
    },

    //* Page Admin Users
    adminUsers: {
      overview: {
        title: 'Quản trị viên',
        description: 'Quản lý tài khoản quản trị.',
        tableColumns: {
          fullName: 'Họ và tên',
          email: 'Email',
          createdAt: 'Ngày tạo',
          role: 'Vai trò',
          emailVerified: 'Email được xác minh',
          actions: 'Hành động',
        },
      },
      show: {
        title: 'Chi tiết quản trị viên',
        description: 'Xem chi tiết quản trị viên.',
        cardTitle: 'Thông tin quản trị viên',
        fields: {
          id: 'ID',
          firstName: 'Tên',
          lastName: 'Họ',
          fullName: 'Họ và tên',
          email: 'Email',
          role: 'Vai trò',
          createdAt: 'Ngày tạo',
          updatedAt: 'Ngày cập nhật',
          lastLoginAt: 'Đăng nhập gần nhất',
          lastIpAddress: 'Địa chỉ IP gần nhất',
          birthday: 'Ngày sinh',
          avatar: 'Ảnh đại diện',
          phoneNumber: 'Số điện thoại',
          emailVerified: 'Email được xác minh',
        },
      },
      create: {
        title: 'Tạo quản trị viên',
        description: 'Tạo tài khoản quản trị mới.',
        fields: {
          email: 'Email',
          firstName: 'Tên',
          lastName: 'Họ',
          phoneNumber: 'Số điện thoại',
          phoneNumberPlaceholder: 'Nhập số điện thoại',
          birthday: 'Ngày sinh',
          password: 'Mật khẩu',
          confirmPassword: 'Xác nhận mật khẩu',
          role: 'Vai trò',
          bio: 'Giới thiệu',
          bioPlaceholder: 'Hãy nhập giới thiệu',
          birthdayPlaceholder: 'Nhập ngày sinh',
        },
      },
      edit: {
        title: 'Chỉnh sửa quản trị viên',
        description: 'Chỉnh sửa thông tin quản trị viên.',
        fields: {
          email: 'Email',
          firstName: 'Tên',
          lastName: 'Họ',
          phoneNumber: 'Số điện thoại',
          phoneNumberPlaceholder: 'Nhập số điện thoại',
          birthday: 'Ngày sinh',
          isActive: 'Kích hoạt',
          emailVerified: 'Email đã xác minh',
          role: 'Vai trò',
          bio: 'Giới thiệu',
          bioPlaceholder: 'Hãy nhập giới thiệu',
          birthdayPlaceholder: 'Nhập ngày sinh',
        },
      },
      additional: {
        popupDeleteAdminUserTitle: 'Xóa quản trị viên',
        popupDeleteAdminUserDescription:
          'Bạn có chắc muốn xóa quản trị viên này?',
        deleteAdminUserSuccess: 'Xóa quản trị viên thành công.',
        createAdminUserSuccess: 'Tạo quản trị viên thành công.',
        updateAdminUserSuccess: 'Cập nhật quản trị viên thành công.',
      },
    },

    //* Page Activity Logs
    activityLogs: {
      overview: {
        title: 'Nhật ký hoạt động',
        description: 'Quản lý nhật ký hoạt động.',
        tableColumns: {
          actor: 'Thực hiện bởi',
          action: 'Hành động',
          entity: 'Đối tượng',
          resourceId: 'ID tài nguyên',
          timestamp: 'Thời gian',
        },
      },
      show: {
        title: 'Chi tiết nhật ký hoạt động',
        description: 'Xem chi tiết nhật ký hoạt động.',
        cardTitle: 'Thông tin nhật ký',
        fields: {
          id: 'ID',
          action: 'Hành động',
          role: 'Vai trò',
          entity: 'Đối tượng',
          timestamp: 'Thời gian',
          actor: 'Người thực hiện',
          before: 'Trước',
          after: 'Sau',
          actorInformation: 'Thông tin người thực hiện',
          old: 'Giá trị cũ',
          new: 'Giá trị mới',
          field: 'Trường',
        },
      },
    },

    //* Page Roles
    roles: {
      overview: {
        title: 'Vai trò',
        description: 'Xem danh sách vai trò.',
        empty: 'Không có vai trò nào.',
        tableColumns: {
          name: 'Tên',
          permissions: 'Quyền hạn',
          createdAt: 'Ngày tạo',
          actions: 'Hành động',
        },
      },
      show: {
        title: 'Chi tiết vai trò',
        description: 'Xem chi tiết vai trò.',
        cardTitle: 'Thông tin vai trò',
        fields: {
          id: 'ID',
          name: 'Tên vai trò',
          permissions: 'Quyền hạn',
          createdAt: 'Ngày tạo',
          updatedAt: 'Ngày cập nhật',
        },
      },
      create: {
        title: 'Tạo vai trò',
        description: 'Tạo vai trò mới.',
        fields: {
          name: 'Tên vai trò',
          permissions: 'Quyền hạn',
        },
      },
      edit: {
        title: 'Chỉnh sửa vai trò',
        description: 'Chỉnh sửa vai trò.',
        fields: {
          name: 'Tên',
          permissions: 'Quyền hạn',
        },
      },
      additional: {
        popupDeleteRoleTitle: 'Xóa vai trò',
        popupDeleteRoleDescription: 'Bạn có chắc muốn xóa vai trò này?',
        deleteRoleSuccess: 'Xóa vai trò thành công.',
        createRoleSuccess: 'Tạo vai trò thành công.',
        updateRoleSuccess: 'Cập nhật vai trò thành công.',
      },
    },

    //* Settings
    settings: {
      title: 'Cài đặt',
      description: 'Quản lý cài đặt và giao diện.',
      account: {
        title: 'Tài khoản',
        description: 'Quản lý tài khoản của bạn.',
        fields: {
          firstName: 'Tên',
          lastName: 'Họ',
          phoneNumber: 'Số điện thoại',
          phoneNumberPlaceholder: 'Nhập số điện thoại',
          birthday: 'Ngày sinh',
        },
        button: {
          update: 'Cập nhật tài khoản',
        },
        messages: {
          birthdayDescription: 'Ngày sinh được dùng để tính tuổi.',
        },
      },
      appearance: {
        title: 'Giao diện',
        description: 'Tùy chỉnh giao diện.',
        fields: {
          theme: 'Chủ đề',
          themeDescription: 'Tự động chuyển đổi chủ đề sáng/tối.',
          light: 'Sáng',
          dark: 'Tối',
          font: 'Phông chữ',
          fontDescription: 'Chọn phông chữ bạn muốn.',
          languages: 'Ngôn ngữ',
          languagesDescription: 'Chọn ngôn ngữ bạn muốn.',
        },
        button: {
          update: 'Cập nhật giao diện',
        },
      },
      website: {
        title: 'Website',
        description: 'Quản lý thương hiệu, logo và favicon của portal.',
      },
      password: {
        title: 'Mật khẩu',
        description: 'Cập nhật mật khẩu.',
        fields: {
          currentPassword: 'Mật khẩu hiện tại',
          newPassword: 'Mật khẩu mới',
          confirmPassword: 'Xác nhận mật khẩu',
        },
        button: {
          update: 'Cập nhật mật khẩu',
        },
      },
      profile: {
        title: 'Hồ sơ',
        description: 'Cập nhật hồ sơ.',
        fields: {
          avatar: 'Ảnh đại diện',
          bio: 'Tiểu sử',
          bioPlaceholder: 'Nhập tiểu sử',
        },
        button: {
          update: 'Cập nhật hồ sơ',
        },
        messages: {
          bioDescription:
            'Bạn có thể chính sửa trên trang cơ bản trên trang chính. Với mô tả cơ bản, với mô tả trên trang cơ bản, với mô tả trên trang trên trang chính.',
        },
      },
    },

    //* Auth
    auth: {
      signIn: {
        title: 'Chào mừng trở lại',
        description: 'Đăng nhập vào tài khoản Honkai Portal.',
        fields: {
          email: 'Email',
          password: 'Mật khẩu',
        },
        button: {
          login: 'Đăng nhập',
          forgotPassword: 'Quên mật khẩu?',
        },
        messages: {
          loginSuccess: 'Đăng nhập thành công.',
          noAccount: 'Chưa có tài khoản? {{link}}',
          terms:
            'Bằng việc tiếp tục, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật.',
        },
      },
      signUp: {
        title: 'Tạo tài khoản',
        description: 'Tạo một tài khoản Honkai Portal mới.',
        fields: {
          firstName: 'Tên',
          lastName: 'Họ',
          email: 'Email',
          password: 'Mật khẩu',
          confirmPassword: 'Xác nhận mật khẩu',
        },
        button: {
          register: 'Đăng ký',
          forgotPassword: 'Quên mật khẩu?',
        },
        messages: {
          registerSuccess: 'Đăng ký thành công.',
          terms:
            'Bằng việc tiếp tục, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật.',
        },
      },
      forgotPassword: {
        title: 'Quên mật khẩu',
        description: 'Khôi phục mật khẩu.',
        fields: {
          email: 'Email',
        },
        button: {
          send: 'Gửi',
          back: 'Quay lại',
        },
        messages: {
          resetPasswordSuccess: 'Gửi email đặt lại mật khẩu thành công.',
        },
      },
      resetPassword: {
        title: 'Đặt lại mật khẩu',
        description: 'Đặt lại mật khẩu của bạn.',
        fields: {
          password: 'Mật khẩu',
          confirmPassword: 'Xác nhận mật khẩu',
        },
        button: {
          resetPassword: 'Đặt lại mật khẩu',
          resetting: 'Xin chờ...',
          reset: 'Đặt lại',
          back: 'Quay lại',
        },
        messages: {
          resetPasswordSuccess: 'Đặt lại mật khẩu thành công.',
        },
      },
    },

    //* Errors
    errors: {},

    //* Page SignOut
    signOut: {
      title: 'Đăng xuất',
      description:
        'Bạn có chắc chắn muốn đăng xuất?. Bạn sẽ phải đăng nhập lại nếu muốn truy cập vào tài khoản.',
      button: {
        signOut: 'Đăng xuất',
        cancel: 'Hủy',
      },
    },
  },

  buttons: {
    delete: 'Xóa',
    create: 'Tạo mới',
    edit: 'Chỉnh sửa',
    back: 'Quay lại',
    save: 'Lưu',
    cancel: 'Hủy',
    duplicate: 'Nhân bản',
    reset: 'Đặt lại',
    continue: 'Tiếp tục',
    remove: 'Loại bỏ',
  },

  common: {
    notAvailable: 'Không khả dụng',
    profile: 'Hồ sơ',
    settings: 'Cài đặt',
    logout: 'Đăng xuất',
    popup: {
      deleteTitle: 'Bạn có chắc chắn muốn xóa?',
      deleteDescription:
        'Hành động này sẽ không thể hoàn tác. Sau khi xoá dữ liệu sẽ không còn tồn tại trên hệ thống.',
    },
  },
}
