export default {
  config: {
    version: 'phiên bản: {{version}}',
    language: {
      vietnamese: 'Tiếng Việt',
      english: 'English',
    },
  },

  navigation: {
    groupGeneral: {
      system: {
        title: 'Hệ thống',
        dashboard: 'Bảng điều khiển',
        auditLogs: 'Nhật ký',
        admins: 'Quản trị viên',
        users: 'Người dùng',
        roles: 'Vai trò',
        settings: 'Cài đặt',
      },
    },
    groupUtility: {
      system: {
        title: 'Tiện ích',
        pages: 'Trang',
      },
    },
    user: {
      account: 'Tài khoản',
      logout: 'Đăng xuất',
      notifications: 'Thông báo',
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
        },
        button: {
          update: 'Cập nhật hồ sơ',
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

    activityLogOverview: {
      title: 'Nhật ký',
      description: 'Xem danh sách nhật ký.',
      empty: 'Không tìm thấy nhật ký.',
      tableColumns: {
        actor: 'Người thực hiện',
        action: 'Hành động',
        entity: 'Thực thể',
        resourceId: 'ID tài nguyên',
        timestamp: 'Thời gian',
      },
    },

    activityLogDetail: {
      title: 'Chi tiết nhật ký',
      description: 'Xem chi tiết nhật ký.',
      cardTitle: 'Thông tin nhật ký',
      fields: {
        id: 'ID',
        action: 'Hành động',
        role: 'Vai trò',
        entity: 'Thực thể',
        timestamp: 'Thời gian',
        actor: 'Người thực hiện',
        before: 'Trước',
        after: 'Sau',
        actorInformation: 'Thông tin người thực hiện',
      },
      buttons: {
        back: 'Quay lại',
      },
    },

    adminOverview: {
      title: 'Quản trị viên',
      description: 'Xem danh sách quản trị viên.',
      empty: 'Không tìm thấy quản trị viên.',
      tableColumns: {
        fullName: 'Họ và tên',
        email: 'Email',
        role: 'Vai trò',
        createdAt: 'Ngày tạo',
        actions: 'Hành động',
      },
      buttons: {
        create: 'Tạo mới',
      },
      input: {
        emailPlaceholder: 'Tìm kiếm theo email...',
      },
      popupDelete: {
        title: 'Bạn có chắc chắn muốn xóa không?',
        description: 'Hành động này không thể hoàn tác!',
        confirm: 'Có, xóa!',
        cancel: 'Hủy',
      },
    },

    adminDetail: {
      title: 'Chi tiết quản trị viên',
      description: 'Xem chi tiết quản trị viên.',
      cardTitle: 'Thông tin quản trị viên',
      fields: {
        id: 'ID',
        username: 'Tên tài khoản',
        firstName: 'Tên',
        lastName: 'Họ',
        fullName: 'Họ và tên',
        email: 'Email',
        role: 'Vai trò',
        avatar: 'Ảnh đại diện',
        lastLoginAt: 'Lần đăng nhập cuối',
        emailVerified: 'Email đã xác minh',
        birthday: 'Ngày sinh',
        active: 'Hoạt động',
        inactive: 'Không hoạt động',
        phoneNumber: 'Số điện thoại',
        ipAddress: 'Địa chỉ IP',
        createdAt: 'Ngày tạo',
        updatedAt: 'Ngày cập nhật',
      },
      buttons: {
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
        back: 'Quay lại',
      },
    },

    adminCreate: {
      title: 'Tạo quản trị viên',
      description: 'Tạo quản trị viên mới.',
      fields: {
        email: 'Email',
        firstName: 'Tên',
        lastName: 'Họ',
        role: 'Vai trò',
        rolePlaceholder: 'Chọn vai trò',
        phoneNumber: 'Số điện thoại',
        phoneNumberPlaceholder: 'Nhập số điện thoại',
        password: 'Mật khẩu',
        passwordConfirmation: 'Xác nhận mật khẩu',
        birthday: 'Ngày sinh',
        username: 'Tài khoản',
        bio: 'Giới thiệu',
      },
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
      errors: {
        emailRequired: 'Email là bắt buộc.',
        roleRequired: 'Vai trò là bắt buộc.',
        passwordRequired: 'Mật khẩu là bắt buộc.',
        passwordMin: 'Mật khẩu phải ít nhất 8 ký tự.',
        passwordMax: 'Mật khẩu phải nhỏ hơn 255 ký tự.',
        passwordUppercase: 'Mật khẩu phải có ít nhất 1 chữ hoa.',
        passwordLowercase: 'Mật khẩu phải có ít nhất 1 chữ thường.',
        passwordNumber: 'Mật khẩu phải có ít nhất 1 số.',
        passwordSpecial: 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt.',
        passwordConfirmationRequired: 'Xác nhận mật khẩu là bắt buộc.',
        passwordMismatch: 'Mật khẩu và xác nhận không khớp.',
      },
      success: {
        create: 'Tạo quản trị viên thành công.',
      },
    },

    adminEdit: {
      title: 'Chỉnh sửa quản trị viên',
      description: 'Chỉnh sửa thông tin quản trị viên.',
      fields: {
        firstName: 'Tên',
        lastName: 'Họ',
        role: 'Vai trò',
        rolePlaceholder: 'Chọn vai trò',
        phoneNumber: 'Số điện thoại',
        phoneNumberPlaceholder: 'Nhập số điện thoại',
        birthday: 'Ngày sinh',
        username: 'Tài khoản',
        bio: 'Giới thiệu',
      },
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
    },

    roleOverview: {
      title: 'Vai trò',
      description: 'Xem danh sách vai trò.',
      empty: 'Không tìm thấy vai trò.',
      tableColumns: {
        name: 'Tên',
        permissions: 'Quyền hạn',
        actions: 'Hành động',
      },
      buttons: {
        create: 'Tạo mới',
      },
      input: {
        namePlaceholder: 'Tìm kiếm theo tên...',
      },
      popupDelete: {
        title: 'Bạn có chắc chắn muốn xóa không?',
        description: 'Hành động này không thể hoàn tác!',
        confirm: 'Có, xóa!',
        cancel: 'Hủy',
      },
    },

    roleCreate: {
      title: 'Tạo vai trò',
      description: 'Tạo vai trò mới.',
      fields: {
        name: 'Tên',
        permissions: 'Quyền hạn',
      },
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
      success: {
        create: 'Tạo vai trò thành công.',
      },
    },

    roleEdit: {
      title: 'Chỉnh sửa vai trò',
      description: 'Chỉnh sửa vai trò.',
      fields: {
        name: 'Tên',
        permissions: 'Quyền hạn',
      },
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
      success: {
        update: 'Cập nhật vai trò thành công.',
      },
    },

    roleDetail: {
      title: 'Chi tiết vai trò',
      description: 'Chi tiết vai trò.',
      cardTitle: 'Thông tin vai trò',
      fields: {
        id: 'ID',
        name: 'Tên vai trò',
        permissions: 'Quyền hạn',
        createdAt: 'Ngày tạo',
        updatedAt: 'Ngày cập nhật',
      },
      popupDelete: {
        title: 'Bạn có chắc chắn muốn xóa không?',
        description: 'Hành động này không thể hoàn tác!',
        confirm: 'Có, xóa!',
        cancel: 'Hủy',
      },
      success: {
        update: 'Cập nhật vai trò thành công.',
        delete: 'Xóa vai trò thành công.',
      },
      buttons: {
        back: 'Quay lại',
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
      },
    },

    userOverview: {
      title: 'Người dùng',
      buttons: {
        create: 'Tạo mới',
      },
    },

    userDetail: {
      title: 'Chi tiết người dùng',
      description: 'Xem chi tiết người dùng.',
      cardTitle: 'Thông tin người dùng',
      fields: {
        id: 'ID',
        firstName: 'Tên',
        lastName: 'Họ',
        fullName: 'Họ và tên',
        email: 'Email',
        avatar: 'Ảnh đại diện',
        lastLoginAt: 'Lần đăng nhập cuối',
        emailVerified: 'Email đã xác minh',
        active: 'Hoạt động',
        inactive: 'Không hoạt động',
        phoneNumber: 'Số điện thoại',
        ipAddress: 'Địa chỉ IP',
        createdAt: 'Ngày tạo',
        updatedAt: 'Ngày cập nhật',
      },
      buttons: {
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
        back: 'Quay lại',
      },
    },

    userCreate: {
      title: 'Tạo người dùng',
      description: 'Tạo người dùng mới.',
      fields: {
        email: 'Email',
        firstName: 'Tên',
        lastName: 'Họ',
        role: 'Vai trò',
        rolePlaceholder: 'Chọn vai trò',
        phoneNumber: 'Số điện thoại',
        phoneNumberPlaceholder: 'Nhập số điện thoại',
        password: 'Mật khẩu',
        passwordConfirmation: 'Xác nhận mật khẩu',
      },
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
      errors: {
        emailRequired: 'Email là bắt buộc.',
        roleRequired: 'Vai trò là bắt buộc.',
        passwordRequired: 'Mật khẩu là bắt buộc.',
        passwordMin: 'Mật khẩu phải ít nhất 8 ký tự.',
        passwordMax: 'Mật khẩu phải nhỏ hơn 255 ký tự.',
        passwordUppercase: 'Mật khẩu phải có ít nhất 1 chữ hoa.',
        passwordLowercase: 'Mật khẩu phải có ít nhất 1 chữ thường.',
        passwordNumber: 'Mật khẩu phải có ít nhất 1 số.',
        passwordSpecial: 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt.',
        passwordConfirmationRequired: 'Xác nhận mật khẩu là bắt buộc.',
        passwordMismatch: 'Mật khẩu và xác nhận không khớp.',
      },
      success: {
        create: 'Tạo người dùng thành công.',
      },
    },

    userEdit: {
      title: 'Chỉnh sửa người dùng',
      description: 'Chỉnh sửa thông tin người dùng.',
      fields: {
        firstName: 'Tên',
        lastName: 'Họ',
        phoneNumber: 'Số điện thoại',
        phoneNumberPlaceholder: 'Nhập số điện thoại',
      },
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
    },

    profileAccount: {
      title: 'Tài khoản',
      description: 'Quản lý tài khoản của bạn.',
      sections: {
        profile: 'Hồ sơ',
        password: 'Mật khẩu',
      },
      fields: {
        firstName: 'Tên',
        lastName: 'Họ',
        phoneNumber: 'Số điện thoại',
        phoneNumberPlaceholder: 'Nhập số điện thoại',
        currentPassword: 'Mật khẩu hiện tại',
        newPassword: 'Mật khẩu mới',
        passwordConfirmation: 'Xác nhận mật khẩu',
      },
      buttons: {
        saveProfile: 'Lưu',
        savePassword: 'Lưu',
      },
      success: {
        edit: 'Cập nhật tài khoản thành công.',
        password: 'Cập nhật mật khẩu thành công.',
      },
      errors: {
        currentPasswordRequired: 'Mật khẩu hiện tại là bắt buộc.',
        newPasswordRequired: 'Mật khẩu mới là bắt buộc.',
        passwordConfirmationRequired: 'Xác nhận mật khẩu là bắt buộc.',
        passwordMismatch: 'Mật khẩu mới và xác nhận không khớp.',
        passwordNotMatch: 'Mật khẩu hiện tại không đúng.',
        passwordMin: 'Mật khẩu phải ít nhất {{min}} ký tự.',
        passwordMax: 'Mật khẩu phải nhỏ hơn {{max}} ký tự.',
        passwordUppercase: 'Mật khẩu phải có ít nhất 1 chữ hoa.',
        passwordLowercase: 'Mật khẩu phải có ít nhất 1 chữ thường.',
        passwordNumber: 'Mật khẩu phải có ít nhất 1 số.',
        passwordSpecial: 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt.',
        uploadAvatar: 'Vui lòng tải lên ảnh đại diện.',
      },
    },

    login: {
      title: 'Chào mừng trở lại',
      description: 'Đăng nhập vào Honkai Portal của bạn.',
      fields: {
        email: 'Email',
        password: 'Mật khẩu',
      },
      buttons: {
        login: 'Đăng nhập',
        forgotPassword: 'Quên mật khẩu?',
      },
      messages: {
        loginSuccess: 'Đăng nhập thành công.',
        noAccount: 'Chưa có tài khoản? {{link}}',
        terms:
          'Bằng cách tiếp tục, bạn đồng ý với Điều khoản Dịch vụ và Chính sách Bảo mật.',
      },
    },

    forgotPassword: {
      title: 'Quên mật khẩu',
      description: 'Đặt lại mật khẩu của bạn.',
      fields: {
        email: 'Email',
      },
      buttons: {
        send: 'Gửi',
        back: 'Quay lại',
      },
      messages: {
        forgotSuccess: 'Đã gửi email thành công.',
        noAccount: 'Chưa có tài khoản? {{link}}',
        descriptionEmail:
          'Nhập email của bạn và chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.',
      },
    },

    resetPassword: {
      title: 'Đặt lại mật khẩu',
      description: 'Đặt lại mật khẩu của bạn.',
      fields: {
        password: 'Mật khẩu',
        passwordPlaceholder: 'Nhập mật khẩu mới',
        passwordConfirmation: 'Xác nhận mật khẩu',
        passwordConfirmationPlaceholder: 'Nhập xác nhận mật khẩu',
      },
      buttons: {
        reset: 'Đặt lại',
        back: 'Quay lại',
      },
      success: {
        reset: 'Đặt lại mật khẩu thành công.',
      },
    },

    // settings: {
    //   title: 'Cài đặt',
    // },

    pagesOverview: {
      title: 'Trang',
      tableColumns: {
        slug: 'Slug',
        status: 'Trạng thái',
        createdAt: 'Ngày tạo',
        actions: 'Hành động',
        title: 'Tiêu đề',
        screen: 'Màn hình',
        position: 'Vị trí',
      },
      popupDelete: {
        title: 'Bạn có chắc chắn muốn xóa không?',
        description: 'Hành động này không thể hoàn tác!',
        confirm: 'Có, xóa!',
        cancel: 'Hủy',
      },
      buttons: {
        create: 'Tạo mới',
        dragMode: 'Chế độ kéo thả',
        back: 'Quay lại',
      },
    },

    pagesCreate: {
      title: 'Tạo trang',
      buttons: {
        save: 'Lưu',
        cancel: 'Hủy',
      },
      fields: {
        status: 'Trạng thái',
        screen: 'Màn hình',
        position: 'Vị trí',
        order: 'Thứ tự',
        slug: 'Slug',
      },
    },

    pagesDetail: {
      cardTitle: 'Chi tiết trang',
      fields: {
        status: 'Trạng thái',
        screen: 'Màn hình',
        position: 'Vị trí',
        slug: 'Slug',
        createdAt: 'Ngày tạo',
        updatedAt: 'Ngày cập nhật',
        order: 'Thứ tự trang',
      },
      title: 'Chi tiết trang',
      buttons: {
        back: 'Quay lại',
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
      },
    },

    pagesEdit: {
      title: 'Chỉnh sửa trang',
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
  },

  forms: {
    notAvailable: 'Không khả dụng',
  },
}
