package generator.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import generator.domain.App;
import generator.service.AppService;
import generator.mapper.AppMapper;
import org.springframework.stereotype.Service;

/**
* @author lawrence
* @description 针对表【app(应用)】的数据库操作Service实现
* @createDate 2024-09-05 16:21:00
*/
@Service
public class AppServiceImpl extends ServiceImpl<AppMapper, App>
    implements AppService{

}




