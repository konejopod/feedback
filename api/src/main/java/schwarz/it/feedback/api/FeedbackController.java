package schwarz.it.feedback.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeedbackController {

    @RequestMapping("/test")
    public String test() {
        return "OK";
    }

    
}