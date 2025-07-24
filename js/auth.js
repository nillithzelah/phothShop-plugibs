// 初始化CSInterface
var csInterface = new CSInterface();

document.addEventListener('DOMContentLoaded', function() {
    // 获取登录表单和相关元素
    var loginForm = document.getElementById('loginForm');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var rememberCheckbox = document.getElementById('remember');
    var loginBtn = document.getElementById('loginBtn');
    var loginBtnText = document.getElementById('loginBtnText');
    var loginSpinner = document.getElementById('loginSpinner');
    var errorMessage = document.getElementById('errorMessage');
    var forgotPassword = document.getElementById('forgotPassword');
    var registerLink = document.getElementById('registerLink');
    
    // 检查是否有保存的登录信息
    checkSavedCredentials();
    
    // 登录表单提交事件
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        var username = usernameInput.value.trim();
        var password = passwordInput.value;
        var remember = rememberCheckbox.checked;
        
        // 表单验证
        if (!username || !password) {
            showError('请输入用户名和密码');
            return;
        }
        
        // 显示加载状态
        setLoading(true);
        
        // 模拟登录请求
        setTimeout(function() {
            // 这里应该替换为实际的API请求
            if (validateCredentials(username, password)) {
                // 登录成功
                if (remember) {
                    saveCredentials(username, password);
                }
                
                // 保存登录状态
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', username);
                
                // 跳转到主页面
                window.location.href = 'index.html';
            } else {
                // 登录失败
                setLoading(false);
                showError('用户名或密码错误');
            }
        }, 1500);
    });
    
    // 忘记密码链接点击事件
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        alert('请联系管理员重置密码');
    });
    
    // 注册链接点击事件
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('请联系管理员创建账号');
    });
    
    // 检查是否有保存的登录信息
    function checkSavedCredentials() {
        var savedUsername = localStorage.getItem('savedUsername');
        var savedPassword = localStorage.getItem('savedPassword');
        
        if (savedUsername && savedPassword) {
            usernameInput.value = savedUsername;
            passwordInput.value = savedPassword;
            rememberCheckbox.checked = true;
        }
        
        // 如果已登录，直接跳转到主页面
        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = 'index.html';
        }
    }
    
    // 保存登录信息
    function saveCredentials(username, password) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
    }
    
    // 验证登录信息（模拟）
    function validateCredentials(username, password) {
        // 这里应该替换为实际的验证逻辑
        // 目前使用简单的测试账号
        var validUsers = [
            { username: 'admin', password: 'admin123' },
            { username: 'user', password: 'user123' },
            { username: 'test', password: 'test123' }
        ];
        
        return validUsers.some(function(user) {
            return user.username === username && user.password === password;
        });
    }
    
    // 显示错误信息
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // 3秒后自动隐藏错误信息
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000);
    }
    
    // 设置加载状态
    function setLoading(isLoading) {
        if (isLoading) {
            loginBtnText.style.display = 'none';
            loginSpinner.style.display = 'inline-block';
            loginBtn.disabled = true;
        } else {
            loginBtnText.style.display = 'inline-block';
            loginSpinner.style.display = 'none';
            loginBtn.disabled = false;
        }
    }
});